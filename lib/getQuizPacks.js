import Informative from "../data/1xxInformative.json";
import Success from "../data/2xxSuccess.json";
import Redirection from "../data/3xxRedirection.json";
import ClientError from "../data/4xxClientError.json";
import ServerError from "../data/5xxServerError.json";

export function getQuizPacks() {
  const allHttpCodes = [
    Informative,
    Success,
    Redirection,
    ClientError,
    ServerError,
  ];
  let flatMappedCodes = [];
  allHttpCodes.forEach((codeGroup) => {
    codeGroup.codes.forEach((code) => flatMappedCodes.push(code));
  });
  var defaultQuizPacks = {};
  allHttpCodes.forEach((cdeGroup) => {
    let quiz = getQuiz(codeGroup, flatMappedCodes);
    defaultQuizPacks[quiz.internalName] = quiz;
  });
  return defaultQuizPacks;
}

export function getQuizPack(id) {
  return getQuizPacks().map((quizPack) => {
    params: quizPack.name;
  })[0];
}

export function getQuizNames() {
  const names = getQuizPacks().map((quizPack) => {
    quizPack.name;
  });
  return names;
}

function getQuiz(codeGroup, flatMappedCodes) {
  let name = codeGroup.name;
  let codes = codeGroup.codes;

  let questions = [];
  for (let i = 0; i < Math.min(10, codes.length); i++) {
    questions.push(getQuestion(codes[i], flatMappedCodes));
  }
  return {
    name,
    internalName: name.replace(" ", ""),
    questions,
  };
}

function getQuestion(rightAnswer, flatMappedCodes) {
  let randomAnswers = [];
  for (let j = 0; j < 3; j++) {
    const randomInt = getRandomInt(flatMappedCodes.length);
    if (flatMappedCodes[randomInt].description !== rightAnswer) {
      randomAnswers.push(flatMappedCodes[randomInt].description);
    }
  }

  return {
    statusCode: rightAnswer.code,
    rightAnswer: rightAnswer.description,
    randomAnswers: randomAnswers,
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
