const getRandomNum = (from = 1, to = 2) =>
    Math.floor(Math.random() * (to - from + from) + from);

export default getRandomNum;