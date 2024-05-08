# Lab 5 - Starter
Amdadul Haque
Brandon Rogers

1. You *could* use a unit test to ensure that the content of a message is what it should be, **but** unit tests would not be ideal for the entire message sending/receiving process because there are tons of moving components.
2. A unit test is well suited to max message length because it is an easy to measure easy to test requirement where you simply check if you accept messages longer than 80 characters.