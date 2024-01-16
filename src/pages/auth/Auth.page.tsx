import { useState } from "react";
import SendOtpForm from "../../features/auth/SendOtpForm";
import CheckOtpForm from "../../features/auth/CheckOtpForm";

function AuthPage() {
  const [step, setStep] = useState<"sendOtp" | "checkOtp">("sendOtp");
  const [optCode, setOtpCode] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      {step === "sendOtp" ? (
        <SendOtpForm
          setStep={setStep}
          setOtpCode={setOtpCode}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
      ) : (
        <CheckOtpForm
          optCode={optCode}
          phoneNumber={phoneNumber}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default AuthPage;
