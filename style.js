const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const topicGrid = document.querySelector(".topic-grid");
document.querySelector(".next-topic")?.addEventListener("click", () => {
  topicGrid.scrollBy({ left: 300, behavior: "smooth" });
});
document.querySelector(".prev-topic")?.addEventListener("click", () => {
  topicGrid.scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelectorAll(".method-row").forEach((row) => {
  row.addEventListener("click", () => {
    document.querySelectorAll(".method-row").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".method-plus").textContent = "+";
    });
    row.classList.add("active");
    row.querySelector(".method-plus").textContent = "−";
  });
});

const modal = document.getElementById("experimentModal");
document.getElementById("openExperiment")?.addEventListener("click", () => modal.showModal());
document.getElementById("closeExperiment")?.addEventListener("click", () => modal.close());
modal?.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

const quizQuestions = [
  ["Who invented the wheel in early recorded history?", "Ancient Mesopotamians", ["Ancient Egyptians", "Ancient Chinese", "Ancient Romans"]],
  ["Who developed ancient Chinese paper?", "Ancient Chinese papermakers", ["Ancient Greeks", "Ancient Indians", "Ancient Babylonians"]],
  ["Which civilization developed a major positional concept of zero?", "Ancient Indian mathematicians", ["Romans", "Maya", "Vikings"]],
  ["Geometry helped ancient civilizations mainly with what?", "Measurement and building", ["Navigation only", "Growing crops only", "Printing"]],
  ["Who developed the earliest magnetic compasses?", "Ancient Chinese inventors", ["Ancient Egyptians", "Greek sailors", "Roman engineers"]],
  ["Which civilization is known for detailed ancient astronomy?", "Babylonian astronomers", ["Aztec rulers", "Viking traders", "Roman gladiators"]],
  ["Which ancient civilization built the pyramids?", "Ancient Egyptians", ["Ancient Chinese", "Ancient Greeks", "Ancient Romans"]],
  ["What did a water clock measure?", "Time", ["Temperature", "Distance", "Wind speed"]],
  ["Which civilization developed important movable printing technology?", "Ancient Chinese", ["Ancient Egyptians", "Ancient Greeks", "Ancient Vikings"]],
  ["Who formulated the principle of buoyancy?", "Archimedes", ["Euclid", "Newton", "Fleming"]],
  ["Who proposed early ideas that matter consists of atoms?", "Democritus", ["Copernicus", "Darwin", "Röntgen"]],
  ["What civilization recorded the Edwin Smith Papyrus?", "Ancient Egyptians", ["Ancient Romans", "Ancient Chinese", "Ancient Indians"]],
  ["Who discovered penicillin?", "Alexander Fleming", ["Marie Curie", "Louis Pasteur", "Albert Einstein"]],
  ["In which year was penicillin discovered?", "1928", ["1895", "1903", "1946"]],
  ["Who helped reveal the DNA double helix?", "James Watson and Francis Crick", ["Newton and Galileo", "Pasteur and Koch", "Bohr and Planck"]],
  ["Whose X-ray diffraction data helped reveal DNA's structure?", "Rosalind Franklin", ["Marie Curie", "Ada Lovelace", "Henrietta Swan Leavitt"]],
  ["Who developed the main theory of relativity?", "Albert Einstein", ["Isaac Newton", "Michael Faraday", "Charles Darwin"]],
  ["Who discovered X-rays?", "Wilhelm Röntgen", ["Henri Becquerel", "Alexander Fleming", "Ernest Rutherford"]],
  ["Who discovered natural radioactivity?", "Henri Becquerel", ["Wilhelm Röntgen", "James Chadwick", "Joseph Priestley"]],
  ["Who made the first successful powered airplane flight?", "The Wright Brothers", ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"]],
  ["Who helped develop insulin treatment for diabetes?", "Frederick Banting and Charles Best", ["Watson and Crick", "Pasteur and Koch", "Bohr and Einstein"]],
  ["Who developed NMR with Edward Purcell?", "Felix Bloch", ["Ernest Rutherford", "James Chadwick", "Louis de Broglie"]],
  ["Who discovered the atomic nucleus?", "Ernest Rutherford", ["Michael Faraday", "Johannes Kepler", "Gregor Mendel"]],
  ["What particle was discovered in 2012 at CERN?", "The Higgs boson", ["The neutron", "The positron", "The photon"]],
  ["Gravitational waves were detected in which year?", "2015", ["2012", "2019", "2020"]],
  ["The first black hole image was released in what year?", "2019", ["2012", "2015", "2021"]],
  ["What vaccine technology was important in 2020?", "mRNA vaccines", ["Penicillin", "Insulin", "X-rays"]],
  ["Which telescope launched in 2021?", "James Webb Space Telescope", ["Hubble", "Kepler", "Voyager"]],
  ["Which system improved AI protein structure prediction?", "AlphaFold", ["Deep Space", "GPS", "CRISPR"]],
  ["Fusion ignition was achieved in a laboratory in which year?", "2022", ["2012", "2019", "2024"]],
  ["Which asteroid did OSIRIS-REx sample?", "Bennu", ["Ceres", "Vesta", "Pallas"]],
  ["The first image of a black hole's shadow used which telescope?", "Event Horizon Telescope", ["Hubble", "James Webb", "Voyager"]],
  ["Commercial lunar landing milestones occurred around which year?", "2024", ["2012", "1999", "2008"]],
  ["Gene editing advances in recent years mainly use what tool?", "CRISPR", ["Radar", "LIDAR", "MRI"]],
  ["What does a light-year measure?", "Distance", ["Time", "Brightness", "Temperature"]],
  ["What is the closest star to Earth?", "The Sun", ["Sirius", "Proxima Centauri", "Polaris"]],
  ["What galaxy contains our solar system?", "The Milky Way", ["Andromeda", "Sombrero", "Triangulum"]],
  ["What is at the center of our solar system?", "The Sun", ["Earth", "Mars", "Jupiter"]],
  ["Which planet is known as the Red Planet?", "Mars", ["Venus", "Mercury", "Neptune"]],
  ["Which planet has the largest ring system visible from Earth?", "Saturn", ["Mars", "Mercury", "Venus"]],
  ["What force keeps planets in orbit around the Sun?", "Gravity", ["Magnetism", "Friction", "Electricity"]],
  ["What is a black hole?", "A region with extreme gravity", ["An empty star", "A moon", "A comet"]],
  ["What is the universe primarily expanding into in modern cosmology?", "It is the expansion of space itself", ["A fixed box", "Earth's atmosphere", "The Sun"]],
  ["What instrument helps scientists observe distant space?", "A telescope", ["A microscope", "A thermometer", "A seismograph"]],
  ["What is DNA?", "Genetic material", ["A vitamin", "A bone", "A hormone"]],
  ["Where is most human DNA stored?", "In the cell nucleus", ["In hair", "In skin only", "In blood plasma only"]],
  ["What is a gene?", "A DNA instruction section", ["An entire organ", "A cell wall", "A blood vessel"]],
  ["What does a vaccine prepare?", "The immune system", ["The digestive system", "The skeletal system", "The auditory system"]],
  ["What are antibodies?", "Proteins that help defend against pathogens", ["Nerve cells", "Red blood cells", "Bones"]],
  ["What carries oxygen in human blood?", "Red blood cells", ["Platelets", "Neurons", "Skin cells"]],
  ["What organ pumps blood?", "The heart", ["The liver", "The lung", "The kidney"]],
  ["What organ filters wastes from blood?", "The kidney", ["The stomach", "The pancreas", "The spleen"]],
  ["What organ produces insulin?", "The pancreas", ["The lung", "The brain", "The stomach"]],
  ["What is the basic unit of life?", "The cell", ["The atom", "The organ", "The tissue"]],
  ["What process makes identical body cells?", "Mitosis", ["Photosynthesis", "Respiration", "Evaporation"]],
  ["What process produces human gametes?", "Meiosis", ["Fission", "Fermentation", "Combustion"]],
  ["What organ controls body coordination?", "The brain", ["The heart", "The kidney", "The liver"]],
  ["What system carries electrical messages through the body?", "The nervous system", ["The digestive system", "The skeletal system", "The circulatory system"]],
  ["What sugar is produced during photosynthesis?", "Glucose", ["DNA", "Chlorine", "Protein"]],
  ["What green pigment enables photosynthesis?", "Chlorophyll", ["Melanin", "Hemoglobin", "Keratin"]],
  ["What gas do plants absorb during photosynthesis?", "Carbon dioxide", ["Oxygen", "Nitrogen", "Helium"]],
  ["What gas do humans need to breathe?", "Oxygen", ["Carbon dioxide", "Nitrogen only", "Methane"]],
  ["What process converts sunlight into chemical energy in plants?", "Photosynthesis", ["Respiration", "Evaporation", "Condensation"]],
  ["What is an ecosystem?", "Organisms interacting with their environment", ["A single animal", "A laboratory", "A type of rock"]],
  ["What is a producer in a food chain?", "A plant or organism that makes food", ["A predator", "A decomposer", "A consumer"]],
  ["What breaks down dead organisms?", "Decomposers", ["Producers", "Stars", "Minerals"]],
  ["What is biodiversity?", "Variety of life", ["One species", "A habitat size", "A weather pattern"]],
  ["What gas is the major cause of human-added greenhouse warming?", "Carbon dioxide", ["Helium", "Argon", "Hydrogen"]],
  ["What is desalination?", "Removing salt from water", ["Freezing water", "Adding minerals", "Boiling oil"]],
  ["What renewable energy comes from the Sun?", "Solar energy", ["Coal", "Oil", "Natural gas"]],
  ["What renewable energy uses moving air?", "Wind energy", ["Nuclear energy", "Coal", "Oil"]],
  ["What renewable energy uses moving water?", "Hydroelectric energy", ["Gasoline", "Solar cells", "Natural gas"]],
  ["What is recycling?", "Reusing materials to make new products", ["Throwing waste away", "Burning all waste", "Mixing all chemicals"]],
  ["What causes acid rain?", "Air pollution", ["Ocean tides", "Moon phases", "Plant growth"]],
  ["What is the greenhouse effect?", "Trapped heat in an atmosphere", ["A glass building", "Ocean freezing", "Plate movement"]],
  ["What is the periodic table?", "A table of chemical elements", ["A star map", "A calendar", "A periodic report"]],
  ["What is H2O?", "Water", ["Oxygen", "Hydrogen peroxide", "Salt"]],
  ["What is NaCl?", "Table salt", ["Sugar", "Water", "Carbon dioxide"]],
  ["What is the smallest unit of an element?", "An atom", ["A cell", "A molecule", "An organ"]],
  ["What is a molecule?", "Atoms bonded together", ["A planet", "A galaxy", "A cell only"]],
  ["What particle has a negative charge?", "Electron", ["Proton", "Neutron", "Photon"]],
  ["What particle has a positive charge?", "Proton", ["Electron", "Neutron", "Neutrino"]],
  ["What particle has no electric charge?", "Neutron", ["Proton", "Electron", "Positron"]],
  ["What instrument measures atmospheric pressure?", "Barometer", ["Thermometer", "Scale", "Microscope"]],
  ["What instrument measures temperature?", "Thermometer", ["Telescope", "Barometer", "Compass"]],
  ["What instrument measures earthquakes?", "Seismograph", ["Anemometer", "Altimeter", "Caliper"]],
  ["What state of matter has a definite shape and volume?", "Solid", ["Gas", "Plasma", "Liquid"]],
  ["What state of matter has particles far apart and fills a container?", "Gas", ["Solid", "Crystal", "Gel"]],
  ["What is evaporation?", "Liquid changing to gas", ["Gas changing to liquid", "Solid changing to liquid", "Ice becoming metal"]],
  ["What is condensation?", "Gas changing to liquid", ["Liquid changing to gas", "Ice melting", "Metal melting"]],
  ["What is melting?", "Solid changing to liquid", ["Liquid changing to solid", "Gas changing to plasma", "Gas changing to liquid"]],
  ["What is the hardest natural mineral?", "Diamond", ["Quartz", "Gold", "Iron"]],
  ["What is the main gas in Earth's atmosphere?", "Nitrogen", ["Oxygen", "Carbon dioxide", "Hydrogen"]],
  ["What percentage of Earth's surface is covered by water?", "About 71 percent", ["About 25 percent", "About 40 percent", "About 90 percent"]],
  ["What planet is closest to the Sun?", "Mercury", ["Venus", "Earth", "Mars"]],
  ["What is the largest planet?", "Jupiter", ["Saturn", "Neptune", "Earth"]],
  ["What is the study of living organisms called?", "Biology", ["Geology", "Astronomy", "Physics"]],
  ["What is the study of matter and energy called?", "Physics", ["History", "Economics", "Literature"]],
  ["What is the study of substances and reactions called?", "Chemistry", ["Geography", "Music", "Sociology"]],
  ["What is the study of Earth called?", "Geology", ["Astronomy", "Zoology", "Biology"]],
  ["What is artificial intelligence?", "Machine systems that perform intelligent tasks", ["A living organism", "A natural satellite", "A chemical element"]],
  ["How do most facial recognition systems identify faces?", "By analyzing patterns and features", ["By listening to speech", "By measuring temperature only", "By tasting"]],
  ["What do robots use to detect surroundings?", "Sensors", ["Leaves", "Bones", "Wings"]],
  ["Can AI help discover medicines?", "Yes", ["No", "Only in fiction", "Never"]],
  ["What was Archimedes' principle about?", "Buoyant force in fluids", ["Magnetism", "Light", "Radio waves"]],
  ["Which ancient Greek proposed early atomic ideas?", "Democritus", ["Copernicus", "Newton", "Darwin"]],
  ["Which scientist proposed natural selection?", "Charles Darwin", ["Galileo Galilei", "Niels Bohr", "Michael Faraday"]],
  ["Who created three laws of planetary motion?", "Johannes Kepler", ["Leonardo da Vinci", "Louis Pasteur", "Thomas Edison"]],
  ["Who invented the telephone?", "Alexander Graham Bell", ["Nikola Tesla", "James Watt", "Blaise Pascal"]],
  ["Who proposed that Earth revolves around the Sun in the heliocentric model?", "Nicolaus Copernicus", ["Claudius Ptolemy", "Aristotle", "Archimedes"]],
  ["Who studied gravity and three laws of motion?", "Isaac Newton", ["Marie Curie", "Albert Einstein", "Gregor Mendel"]],
  ["Who discovered the laws of inheritance through pea plants?", "Gregor Mendel", ["Charles Darwin", "Louis Pasteur", "Robert Hooke"]],
  ["Who first described cells while observing cork?", "Robert Hooke", ["Anton van Leeuwenhoek", "Louis Pasteur", "Ernest Rutherford"]],
  ["Who is known for improvements to the microscope and observing microorganisms?", "Anton van Leeuwenhoek", ["Isaac Newton", "James Watt", "Galileo Galilei"]],
  ["Who established germ theory?", "Louis Pasteur and Robert Koch", ["Newton and Leibniz", "Watson and Crick", "Planck and Einstein"]]
].map(([question, correctAnswer, wrongAnswers]) => ({
  question,
  answers: [correctAnswer, ...wrongAnswers],
  correct: 0
})).slice(0, 100);

let quizIndex = 0;
let quizScore = 0;
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const quizResult = document.getElementById("quizResult");
const quizProgress = document.getElementById("quizProgress");
const quizScoreText = document.getElementById("quizScore");

function renderQuizQuestion() {
  const item = quizQuestions[quizIndex];
  quizQuestion.textContent = item.question;
  quizResult.textContent = "";
  quizAnswers.innerHTML = "";
  quizProgress.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  quizScoreText.textContent = `Score: ${quizScore}`;

  const shuffledAnswers = item.answers
    .map((answer, originalIndex) => ({ answer, originalIndex }))
    .sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach(({ answer, originalIndex }, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-answer";
    button.textContent = answer;
    button.addEventListener("click", () => {
      if (quizAnswers.dataset.answered) return;
      quizAnswers.dataset.answered = "true";
      const buttons = quizAnswers.querySelectorAll(".quiz-answer");
      buttons.forEach((answerButton) => {
        answerButton.disabled = true;
      });
      const isCorrect = originalIndex === item.correct;
      buttons[index].classList.add(isCorrect ? "correct" : "wrong");
      buttons[index].setAttribute(
        "aria-label",
        isCorrect ? `Correct: ${answer}` : `Incorrect: ${answer}`
      );
      if (isCorrect) {
        quizScore++;
        quizResult.textContent = `Correct answer: ${item.answers[item.correct]}`;
        quizResult.className = "quiz-result correct-result";
      } else {
        const correctIndex = shuffledAnswers.findIndex(({ originalIndex }) => originalIndex === item.correct);
        quizResult.textContent = `Incorrect. The correct answer is: ${item.answers[item.correct]}`;
        quizResult.className = "quiz-result wrong-result";
        buttons[correctIndex].classList.add("correct");
        buttons[correctIndex].setAttribute("aria-label", `Correct answer: ${item.answers[item.correct]}`);
      }
      quizScoreText.textContent = `Score: ${quizScore}`;
    });
    quizAnswers.appendChild(button);
  });

  delete quizAnswers.dataset.answered;
}

document.getElementById("nextQuestion")?.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizQuestions.length;
  renderQuizQuestion();
});

if (quizQuestion) renderQuizQuestion();