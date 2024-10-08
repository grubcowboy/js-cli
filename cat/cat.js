async function readFile(input) {
    try {
        let path = input;
        let file = Bun.file(path);
        let text = await file.text();
        console.log(text);
    } catch (err) {
        console.error(err.message);
    }
}

readFile(Bun.argv[2]);