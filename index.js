let x = 1

// full square
for(i = 0; i < 5 ; i++){
    for(z = 0; z < 5; z++){
        process.stdout.write("x ")
        x++
        if(z == 4){
            process.stdout.write("\n")
        }
    }
}

process.stdout.write("\n \n")
//pyramid 1
for(i = 0; i < 5 ; i++){
    for(z = i; z < 5; z++){
        process.stdout.write("x ")
        x++
        if(z == 4){
            process.stdout.write("\n")
        }
    }
}

process.stdout.write("\n \n")
//pyramid 2
for(i = 0; i < 5 ; i++){
    for(z = 0; z < 5; z++){
        process.stdout.write("x ")
        x++
        if(z == i){
            process.stdout.write("\n")
            break;
        }
    }
}