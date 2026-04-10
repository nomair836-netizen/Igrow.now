async function run() {
  const res = await fetch('https://ibb.co/nsFqgWT4');
  const text = await res.text();
  const match = text.match(/https:\/\/i\.ibb\.co\/[^\"]+/g);
  console.log("MATCHES:", match);
}
run();
