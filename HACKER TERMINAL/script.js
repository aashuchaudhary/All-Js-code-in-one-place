//async arrow function: which Append text in our body
const addItem = async (item) => {
  await randomDealy();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

//delay using set time out nd asyncAwait

const randomDealy = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};
async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 50);
  //Iniatialisize test in Array.

  let text = [
    "Initialising hacking now reading you data",
    "reading your files",
    "Password files Detected",
    "Sending all Password and personal files to server",
    "Cleaning Up",
    "Exploit found in the target system",
    "Bypassing firewall using advanced techniques",
    "SQL injection vulnerability detected",
    "Executing brute force attack on login page",
    "Penetration test reveals security flaws",
    "Deploying phishing campaign to gather credentials",
    "Network sniffing in progress",
    "Privilege escalation achieved on server",
    "Reverse engineering the software to find backdoors",
    "DDoS attack initiated against target website",
    "Cracking password hashes with rainbow tables",
    "Injecting malicious code into the application",
    "Establishing a backdoor connection",
    "Covering tracks by clearing logs",
    "Using social engineering to gain access",
    "Exfiltrating data from compromised system",
    "Scanning network for open ports",
    "Developing a zero-day exploit",
    "Intercepting communications with a man-in-the-middle attack",
    "Analyzing malware to understand its payload",
    "Using keylogger to capture keystrokes",
    "Accessing dark web marketplaces",
    "Cloning RFID to bypass security systems",
    "Testing system resilience with fuzzing techniques",
    "Remote code execution achieved",
  ];

  for (item of text) {
    await addItem(item); //async function
  }

  await randomDealy();
  clearInterval(t);
}
main();
