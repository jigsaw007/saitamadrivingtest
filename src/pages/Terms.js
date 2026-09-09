import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Terms() {
  return (
    <div><Navbar /><main className="container content-page mt-5">
      <h1>Terms of Use</h1>
      <p className="lead">These terms apply to your use of Saitama Driving Test, including free study material and premium quiz access.</p>

      <h2>Educational use</h2>
      <p>The website provides independent study material. It is not a government service, examination authority or driving school, and it does not guarantee a passing result.</p>

      <h2>Accounts and access</h2>
      <p>If you use sign-in or premium features, you are responsible for maintaining access to the email account used for authentication and for not intentionally interfering with the service or attempting to bypass access controls.</p>

      <h2>Premium payments</h2>
      <p>Premium access may be sold as described at checkout. Payment processing is handled by Stripe. The price and purchase terms shown in the checkout flow at the time of purchase apply to that transaction.</p>

      <h2>Content accuracy</h2>
      <p>We work to improve the material, but traffic law, administrative procedures, exam formats and official requirements can change. Always verify time-sensitive licensing requirements with the relevant official authority.</p>

      <h2>Intellectual property</h2>
      <p>Unless otherwise stated, original site text, interface material and compiled study content are provided for personal study. Do not republish substantial portions of the site or commercially redistribute its question sets without permission.</p>

      <h2>Availability</h2>
      <p>The site is provided on an as-available basis. Features may be corrected, updated, suspended or changed when necessary for maintenance, security, legal compliance or product improvement.</p>

      <h2>Limitation</h2>
      <p>To the extent permitted by applicable law, the site owner is not responsible for exam results, administrative decisions, penalties or losses caused by relying on outdated or misunderstood study material.</p>

      <h2>Privacy</h2>
      <p>See the <Link to="/privacy">Privacy Policy</Link> for information about authentication, analytics, payments and browser storage.</p>

      <h2>Contact</h2>
      <p>Questions, correction requests and technical issues can be submitted through the <Link to="/contact">Contact page</Link>.</p>

      <p className="text-muted">Last updated: September 9, 2026.</p>
    </main></div>
  );
}
