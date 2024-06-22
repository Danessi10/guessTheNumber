const getResponse = (answer = true, from = 1, to = 2) => {
    if (!answer) return prompt(
        `Uncorrect value. Try again (from ${from} to ${to} inclusive)`, to
    );

    return prompt(
        `Enter some number (from ${from} to ${to} inclusive)`, to
    );
}

export default getResponse;