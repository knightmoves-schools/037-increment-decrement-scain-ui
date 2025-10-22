var counter = 100;

Document.getElementById("before-prefix-increment").innerHTML = counter;
Document.getElementById("prefix-increment").innerHTML = ++counter;

Document.getElementById("before-postfix-increment").innerHTML = counter;
Document.getElementById("postfix-increment").innerHTML = counter++;

Document.getElementById("before-prefix-decrement").innerHTML = counter;
Document.getElementById("prefix-decrement").innerHTML = --counter;

Document.getElementById("before-postfix-decrement").innerHTML = counter;
Document.getElementById("postfix-decrement").innerHTML = counter--;

Document.getElementById("result").innerHTML = counter;