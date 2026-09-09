import React from "react";
import Navbar from "../components/Navbar";

export default function Privacy() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Privacy Policy</h1>
      <p className="lead">This policy explains the data used by Saitama Driving Test for site operation, analytics, account access and premium payments.</p>

      <h2>Information used by the service</h2>
      <p>You can browse much of the site without creating an account. Some features may use browser storage to remember quiz scores or session-related information. If you sign in or activate premium access, authentication may involve your email address and account/session data.</p>

      <h2>Authentication</h2>
      <p>Account and sign-in functionality is provided through Supabase. Supabase may process identifiers such as your email address, authentication tokens and technical data needed to maintain a signed-in session.</p>

      <h2>Payments</h2>
      <p>Premium checkout is processed by Stripe. Payment-card details are entered into Stripe's checkout experience and are processed by Stripe. This website may receive payment status, checkout identifiers, customer email and related transaction metadata needed to activate premium access and provide support.</p>

      <h2>Analytics</h2>
      <p>The site uses Google Analytics to understand aggregate usage and improve the website. Analytics services may use cookies or similar technologies and may process technical information such as browser/device information, pages visited and approximate usage data.</p>

      <h2>Advertising</h2>
      <p>If advertising such as Google AdSense is enabled, advertising providers may use cookies or similar technologies to serve, measure and protect ads in accordance with their own policies and applicable consent requirements. This section is included so the policy remains accurate if ads are activated.</p>

      <h2>Local browser storage</h2>
      <p>Quiz progress, scores, authentication session information or premium-related state may be stored locally in your browser. Clearing browser data can remove locally stored quiz information and may sign you out.</p>

      <h2>Third-party services</h2>
      <p>The service may rely on providers including Supabase, Stripe, Google Analytics, hosting infrastructure and external official-reference websites. Those providers process data under their own privacy terms.</p>

      <h2>Data security and retention</h2>
      <p>We aim to collect or retain only information needed to operate the service, provide premium access, diagnose problems and understand site usage. No internet service can guarantee absolute security.</p>

      <h2>Your choices</h2>
      <p>You can limit browser cookies/storage through your browser settings. If you want to report a privacy concern or request help relating to account information, use the Contact page and do not post sensitive payment data publicly.</p>

      <p className="text-muted">Last updated: September 9, 2026.</p>
    </main></div>
  );
}
