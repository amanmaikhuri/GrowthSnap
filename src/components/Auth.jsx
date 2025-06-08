import React, { useState } from "react";
import {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../firebase.js";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  // Google Sign-in
  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google user:", user);
      // Send token to backend if needed
    } catch (error) {
      console.error(error);
    }
  }

  // Email Sign Up
  async function signUpWithEmail() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      console.error(error);
    }
  }

  // Email Sign In
  async function signInWithEmail() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      console.log("User signed in:", userCredential.user);
    } catch (error) {
      console.error(error);
    }
  }

  // Phone Number Sign In (with reCAPTCHA)
  function setupRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
  }

  async function requestOTP() {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log("OTP sent");
    } catch (error) {
      console.error(error);
    }
  }

  async function verifyOTP() {
    try {
      const credential = await auth.PhoneAuthProvider.credential(verificationId, otp);
      await auth.signInWithCredential(credential);
      console.log("Phone number verified and signed in");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Auth Demo</h2>

      <div className="mb-4">
        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          className="border p-2 w-full mt-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="btn mt-2" onClick={signUpWithEmail}>
          Sign Up with Email
        </button>
        <button className="btn mt-2" onClick={signInWithEmail}>
          Sign In with Email
        </button>
      </div>

      <div className="mb-4">
        <button className="btn" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
      </div>

      <div className="mb-4">
        <input
          className="border p-2 w-full"
          placeholder="+1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
        />
        <div id="recaptcha-container"></div>
        <button className="btn mt-2" onClick={requestOTP}>
          Request OTP
        </button>

        <input
          className="border p-2 w-full mt-2"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text"
        />
        <button className="btn mt-2" onClick={verifyOTP}>
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default Auth;
