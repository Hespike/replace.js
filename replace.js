let szoveg = "Ez egy példa, eskü egy példa.";

while (szoveg.indexOf("példa") >= 0) {        
    szoveg = szoveg.replace("példa", "programgithubomra");  
}

console.log(szoveg);
