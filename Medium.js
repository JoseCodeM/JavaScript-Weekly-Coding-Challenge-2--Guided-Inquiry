let message = prompt("You shouting? Whispering? or neither?:")

//letting you know if you're shouting, whispering or talking normally
if (message === message.toUpperCase()) {
    console.log("SHOUTING")
} else if (message === message.toLowerCase()) {
    console.log("Whispering")
} else {
    console.log("Talking Normally")
}