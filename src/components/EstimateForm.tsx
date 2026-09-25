"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xppwjypr";

type Status = "idle" | "submitting" | "success" | "error";

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if ((data.get("company") as string)?.length) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New free estimate request",
          name: data.get("name"),
          phone: data.get("phone"),
          city: data.get("city"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const detail = payload?.errors?.map((e: { message: string }) => e.message).join(", ");
        throw new Error(detail || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center ring-1 ring-inset ring-white/20 backdrop-blur-sm">
        <p className="font-heading text-2xl font-bold text-white">Thank you!</p>
        <p className="mt-2 text-slate-200">
          We&rsquo;ve received your request and will be in touch shortly. For
          urgent needs, call us directly at{" "}
          <a href={siteConfig.phone.href} className="font-bold text-white underline">
            {siteConfig.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="sm:col-span-1">
        <label htmlFor="name" className="sr-only">
          First &amp; Last Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="First & Last Name"
          className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm ring-1 ring-inset ring-white/0 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="city" className="sr-only">
          Address or City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          placeholder="Address or City"
          className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="sr-only">
          Tell us about your plumbing or renovation needs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell Us About Your Plumbing or Bathroom & Kitchen Renovation Needs..."
          className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100 ring-1 ring-inset ring-red-400/30">
          {errorMessage}
        </p>
      )}

      <div className="sm:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-white px-10 py-4 text-base font-bold text-brand-blue-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request Now"}
        </button>
      </div>
    </form>
  );
}
