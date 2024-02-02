const http = require("http"); 
const fs = require("fs"); // knjižnice
const hostname = "192.168.1.13"; // IP naslov VirtualBox Node.js service
const port = 80; // HTTP zahtevek pošiljamo preko porta 80
const server = http.createServer((req, res) => { // vzpostavitev service-a
if (req.url === "/") { 
fs.readFile(__dirname + "/1naloga_Nemanic.html", (err, data) => { // beremo o spletni strani
if (err) { // Kaj èe pride do napake..
res.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"}); // izpišemo error 500
return res.end("Napaka pri nalaganju HTML strani. Branje datoteke 1naloga_Nemanic.html z diska ni bilo mogoèe."); // posredujem "response" kot odgovor - obvestilo o napaki
}
res.writeHead(200); // v primeru brez napak izpišem 200
res.end(data); // pošljemo podatke o spletni strani
});
}
});
server.listen(port, hostname, () => {
console.log("Strežnik teèe na http://" + hostname + ":" + port);
});