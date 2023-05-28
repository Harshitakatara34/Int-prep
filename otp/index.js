const otpInputs = document.getElementsByClassName("otp-input");
const submitBtn = document.getElementById("submit-btn");

// Move to the next input box on keypress
for (let i = 0; i < otpInputs.length; i++) {
  otpInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      if (i !== otpInputs.length - 1) {
        otpInputs[i + 1].focus();
      } else {
        otpInputs[i].blur();
      }
    }
    //  else if (this.value.length === 0) {
    //   if (i !== 0) {
    //     otpInputs[i - 1].focus();
    //   }
    // }
  });
// 1234
  // Handle backspace keypress
  otpInputs[i].addEventListener("keydown", function (event) {
    if (event.key === "Backspace" && this.value.length === 0) {
      if (i !== 0) {
        otpInputs[i - 1].focus();
      }
    }
  });

  // Handle paste event
  otpInputs[i].addEventListener("paste", function (event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    const digits = pastedText.match(/\d/g);
    console.log(digits)
    if (digits && digits.length <= otpInputs.length - i) {
      for (let j = 0; j < digits.length; j++) {
        otpInputs[i + j].value = digits[j];
        if (i + j !== otpInputs.length - 1) {
          otpInputs[i + j + 1].focus();
        } else {
          otpInputs[i + j].blur();
        }
      }
    }
  });
}

// Handle submit button click
submitBtn.addEventListener("click", function () {
  const enteredOTP = Array.from(otpInputs).map((input) => input.value).join("");
  const expectedOTP = "1234";
//  console.log(typeof Array.from(otpInputs))
//  console.log(typeof otpInputs)
  if (enteredOTP === expectedOTP) {
    alert("Success");
    
  } else {
    alert("Wrong OTP");
  }
});
