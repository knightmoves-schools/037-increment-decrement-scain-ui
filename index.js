var counter = 100;

Document.getElementById("beforeprefixIncrement").innerHTML = counter;
Document.getElementById("prefixIncrement").innerHTML = ++counter;

Document.getElementById("beforepostfixIncrement").innerHTML = counter;
Document.getElementById("postfixIncrement").innerHTML = counter++;

Document.getElementById("beforeprefixDecrement").innerHTML = counter;
Document.getElementById("prefixDecrement").innerHTML = --counter;

Document.getElementById("beforepostfixDecrement").innerHTML = counter;
Document.getElementById("postfixDecrement").innerHTML = counter--;

Document.getElementById("result").innerHTML = counter;