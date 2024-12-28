// Function that returns a promise
function examplePromise() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // change to false to simulate failure
          if (success) {
              resolve("Promise resolved successfully!");
          } else {
              reject("Promise failed!");
          }
      }, 2000); // Simulate async operation with 2 seconds delay
  });
}

// Async function to handle the promise
async function runAsyncFunction() {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = "Loading..."; // Show loading message while waiting
  try {
      const result = await examplePromise();
      resultDiv.textContent = result; // Display result when promise resolves
  } catch (error) {
      resultDiv.textContent = error; // Display error if promise rejects
  }
}
