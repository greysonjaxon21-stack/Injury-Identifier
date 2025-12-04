// Data: Injuries
const injuries = [
    {
        id: 'runners_knee',
        name: "Runner's Knee",
        description: "Pain around or behind the kneecap, often aggravated by running, squatting, or sitting for long periods.",
        recommendations: ["Rest from high-impact activities", "Ice the knee", "Strengthen quadriceps", "Check footwear"],
        tags: ['knee', 'dull_pain', 'running', 'stairs', 'chronic', 'stiffness']
    },
    {
        id: 'acl_tear',
        name: "ACL Injury",
        description: "A tear or sprain of the anterior cruciate ligament. Often accompanied by a 'pop' sound and immediate swelling.",
        recommendations: ["See a doctor immediately", "RICE (Rest, Ice, Compression, Elevation)", "Do not put weight on it"],
        tags: ['knee', 'pop_sound', 'instability', 'swelling', 'acute', 'no_weight']
    },
    {
        id: 'meniscus_tear',
        name: "Meniscus Tear",
        description: "Tear in the shock-absorbing cartilage of the knee. Symptoms include locking, clicking, and pain on the joint line.",
        recommendations: ["Rest", "Ice", "See a doctor", "Possible surgery if severe"],
        tags: ['knee', 'locking', 'twisting', 'joint_line_pain', 'chronic', 'clicking']
    },
    {
        id: 'ankle_sprain',
        name: "Ankle Sprain",
        description: "Injury to the ligaments in the ankle, usually caused by rolling or twisting.",
        recommendations: ["RICE method", "Ankle brace", "Gentle range of motion exercises"],
        tags: ['ankle', 'swelling', 'bruising', 'twisting', 'acute']
    },
    {
        id: 'achilles_tendinitis',
        name: "Achilles Tendinitis",
        description: "Overuse injury of the Achilles tendon, the band of tissue that connects calf muscles at the back of the lower leg to your heel bone.",
        recommendations: ["Rest", "Ice", "Heel lifts", "Calf stretches"],
        tags: ['ankle', 'heel_pain', 'morning_stiffness', 'chronic']
    },
    {
        id: 'plantar_fasciitis',
        name: "Plantar Fasciitis",
        description: "Inflammation of the thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes.",
        recommendations: ["Stretching", "Arch support", "Ice bottle roll", "Rest"],
        tags: ['foot', 'arch_pain', 'morning_pain', 'chronic']
    },
    {
        id: 'shin_splints',
        name: "Shin Splints",
        description: "Pain along the shin bone (tibia), common in runners and dancers.",
        recommendations: ["Rest", "Ice", "Proper footwear", "Run on softer surfaces"],
        tags: ['leg', 'shin_pain', 'running', 'impact', 'chronic', 'diffuse_pain']
    },
    {
        id: 'stress_fracture_leg',
        name: "Tibial Stress Fracture",
        description: "Small cracks in the shin bone caused by repetitive force, often from overuse.",
        recommendations: ["Stop running immediately", "See a doctor", "Boot/Crutches may be needed"],
        tags: ['leg', 'pinpoint_pain', 'chronic', 'impact']
    },
    {
        id: 'hamstring_strain',
        name: "Hamstring Strain",
        description: "A strain or tear to the tendons or large muscles at the back of the thigh.",
        recommendations: ["Rest", "Ice", "Compression", "Gentle stretching after acute phase"],
        tags: ['thigh', 'back_thigh', 'sprinting', 'popping', 'acute']
    },
    {
        id: 'groin_strain',
        name: "Groin Strain",
        description: "Tear or rupture to any one of the adductor muscles resulting in pain in the inner thigh.",
        recommendations: ["Rest", "Ice", "Compression", "Avoid spreading legs"],
        tags: ['hip', 'groin_pain', 'sprinting', 'change_direction', 'acute']
    },
    {
        id: 'rotator_cuff',
        name: "Rotator Cuff Injury",
        description: "Dull ache deep in the shoulder, difficulty sleeping on the injured side, arm weakness.",
        recommendations: ["Rest", "Physical therapy", "Anti-inflammatory medication"],
        tags: ['shoulder', 'dull_ache', 'weakness', 'lifting', 'limited_rom', 'chronic', 'night_pain']
    },
    {
        id: 'tennis_elbow',
        name: "Tennis Elbow",
        description: "Pain and tenderness on the outside of the elbow.",
        recommendations: ["Rest", "Ice", "Brace", "Stretching"],
        tags: ['elbow', 'outside_pain', 'gripping', 'chronic']
    },
    {
        id: 'lower_back_strain',
        name: "Lower Back Strain",
        description: "Strain of the muscles or tendons in the back. Common causes include lifting heavy objects or sudden movements.",
        recommendations: ["Rest", "Heat/Ice", "Gentle stretching", "Avoid heavy lifting"],
        tags: ['back', 'lower_back', 'lifting', 'muscle_pain']
    },
    {
        id: 'sciatica',
        name: "Sciatica",
        description: "Pain radiating along the sciatic nerve, which runs down one or both legs from the lower back.",
        recommendations: ["Physical therapy", "Stretching", "Hot/Cold packs", "See a doctor"],
        tags: ['back', 'radiating', 'leg_pain', 'nerve_pain']
    },
    {
        id: 'wrist_sprain',
        name: "Wrist Sprain",
        description: "Injury to the ligaments in the wrist, often from falling on an outstretched hand.",
        recommendations: ["RICE", "Wrist splint", "Rest"],
        tags: ['wrist', 'fall', 'swelling', 'acute']
    },
    {
        id: 'carpal_tunnel',
        name: "Carpal Tunnel Syndrome",
        description: "Pressure on the median nerve in the wrist. Symptoms include numbness, tingling, and weakness in the hand.",
        recommendations: ["Wrist splint", "Ergonomic adjustments", "Breaks from typing", "See a doctor"],
        tags: ['wrist', 'numbness', 'tingling', 'chronic']
    }
];

// Questions: 1-15 General, 16 Body Part, 17-20 Specific
const generalQuestions = [
    { text: "What is your typical activity level?", options: [{ label: "Sedentary", tags: [] }, { label: "Active / Athlete", tags: ['active'] }] },
    { text: "How intense is the pain (1-10)?", options: [{ label: "Mild (1-3)", tags: ['mild'] }, { label: "Moderate (4-7)", tags: ['moderate'] }, { label: "Severe (8-10)", tags: ['severe'] }] },
    { text: "How would you describe the pain?", options: [{ label: "Sharp / Stabbing", tags: ['sharp_pain'] }, { label: "Dull / Aching", tags: ['dull_pain'] }, { label: "Burning", tags: ['burning'] }] },
    { text: "Did the pain start suddenly?", options: [{ label: "Yes, sudden onset", tags: ['acute'] }, { label: "No, gradual onset", tags: ['chronic'] }] },
    { text: "How long have you had this pain?", options: [{ label: "Days", tags: ['acute'] }, { label: "Weeks or Months", tags: ['chronic'] }] },
    { text: "When is the pain worst?", options: [{ label: "Morning", tags: ['morning_pain'] }, { label: "During Activity", tags: ['activity_pain'] }, { label: "At Night", tags: ['night_pain'] }] },
    { text: "Is there visible swelling?", options: [{ label: "Yes", tags: ['swelling'] }, { label: "No", tags: [] }] },
    { text: "Is there bruising?", options: [{ label: "Yes", tags: ['bruising'] }, { label: "No", tags: [] }] },
    { text: "Does the joint feel unstable?", options: [{ label: "Yes, gives way", tags: ['instability'] }, { label: "No", tags: [] }] },
    { text: "Did you hear a sound when it happened?", options: [{ label: "Pop", tags: ['pop_sound'] }, { label: "Crack/Grind", tags: ['grinding'] }, { label: "No", tags: [] }] },
    { text: "Do you have numbness or tingling?", options: [{ label: "Yes", tags: ['numbness', 'tingling'] }, { label: "No", tags: [] }] },
    { text: "Is there stiffness or limited movement?", options: [{ label: "Yes", tags: ['stiffness', 'limited_rom'] }, { label: "No", tags: [] }] },
    { text: "Does the area feel warm to touch?", options: [{ label: "Yes", tags: ['inflammation'] }, { label: "No", tags: [] }] },
    { text: "Does rest make it better?", options: [{ label: "Yes", tags: ['better_rest'] }, { label: "No", tags: [] }] },
    { text: "Does movement make it worse?", options: [{ label: "Yes", tags: ['worse_movement'] }, { label: "No", tags: [] }] }
];

const bodyPartQuestion = {
    text: "Where is the injury located?",
    options: [
        { label: "Knee", tags: ['knee'], next: 'knee' },
        { label: "Ankle / Foot", tags: ['ankle', 'foot'], next: 'ankle' },
        { label: "Shoulder", tags: ['shoulder'], next: 'shoulder' },
        { label: "Leg (Shin/Calf)", tags: ['leg'], next: 'leg' },
        { label: "Thigh / Hip", tags: ['thigh', 'hip'], next: 'thigh' },
        { label: "Back", tags: ['back'], next: 'back' },
        { label: "Wrist / Elbow", tags: ['wrist', 'elbow'], next: 'arm' },
        { label: "Other", tags: [], next: 'other' }
    ]
};

const specificQuestions = {
    knee: [
        { text: "Is the pain on the joint line?", options: [{ label: "Yes", tags: ['joint_line_pain'] }, { label: "No", tags: [] }] },
        { text: "Does the knee lock or catch?", options: [{ label: "Yes", tags: ['locking'] }, { label: "No", tags: [] }] },
        { text: "Does it hurt to go down stairs?", options: [{ label: "Yes", tags: ['stairs'] }, { label: "No", tags: [] }] },
        { text: "Can you fully straighten your leg?", options: [{ label: "Yes", tags: [] }, { label: "No", tags: ['limited_rom'] }] }
    ],
    ankle: [
        { text: "Did you roll your ankle?", options: [{ label: "Yes", tags: ['twisting'] }, { label: "No", tags: [] }] },
        { text: "Is the pain in the heel?", options: [{ label: "Yes", tags: ['heel_pain'] }, { label: "No", tags: [] }] },
        { text: "Is the pain in the arch of the foot?", options: [{ label: "Yes", tags: ['arch_pain'] }, { label: "No", tags: [] }] },
        { text: "Can you bear weight?", options: [{ label: "Yes", tags: ['weight_bearing'] }, { label: "No", tags: ['no_weight'] }] }
    ],
    shoulder: [
        { text: "Does it hurt to lift your arm?", options: [{ label: "Yes", tags: ['weakness', 'lifting'] }, { label: "No", tags: [] }] },
        { text: "Is the pain deep inside?", options: [{ label: "Yes", tags: ['deep_pain'] }, { label: "No", tags: [] }] },
        { text: "Did you fall on your shoulder?", options: [{ label: "Yes", tags: ['fall'] }, { label: "No", tags: [] }] },
        { text: "Does it click when moving?", options: [{ label: "Yes", tags: ['clicking'] }, { label: "No", tags: [] }] }
    ],
    leg: [
        { text: "Is the pain in the shin?", options: [{ label: "Yes", tags: ['shin_pain'] }, { label: "No", tags: [] }] },
        { text: "Can you pinpoint the pain with one finger?", options: [{ label: "Yes", tags: ['pinpoint_pain'] }, { label: "No", tags: ['diffuse_pain'] }] },
        { text: "Does it hurt when you jump?", options: [{ label: "Yes", tags: ['impact'] }, { label: "No", tags: [] }] },
        { text: "Is the calf tight?", options: [{ label: "Yes", tags: ['calf_pain'] }, { label: "No", tags: [] }] }
    ],
    thigh: [
        { text: "Is the pain in the back of the thigh?", options: [{ label: "Yes", tags: ['back_thigh'] }, { label: "No", tags: [] }] },
        { text: "Is the pain in the groin?", options: [{ label: "Yes", tags: ['groin_pain'] }, { label: "No", tags: [] }] },
        { text: "Did you feel a pop while sprinting?", options: [{ label: "Yes", tags: ['sprinting', 'popping'] }, { label: "No", tags: [] }] },
        { text: "Does it hurt to squeeze your legs together?", options: [{ label: "Yes", tags: ['adductor_pain'] }, { label: "No", tags: [] }] }
    ],
    back: [
        { text: "Is the pain in the lower back?", options: [{ label: "Yes", tags: ['lower_back'] }, { label: "No", tags: [] }] },
        { text: "Does pain shoot down your leg?", options: [{ label: "Yes", tags: ['radiating', 'leg_pain'] }, { label: "No", tags: [] }] },
        { text: "Did it happen after lifting?", options: [{ label: "Yes", tags: ['lifting'] }, { label: "No", tags: [] }] },
        { text: "Is it muscle tightness?", options: [{ label: "Yes", tags: ['muscle_pain'] }, { label: "No", tags: [] }] }
    ],
    arm: [
        { text: "Is the pain in the wrist?", options: [{ label: "Yes", tags: ['wrist'] }, { label: "No", tags: [] }] },
        { text: "Is the pain in the elbow?", options: [{ label: "Yes", tags: ['elbow'] }, { label: "No", tags: [] }] },
        { text: "Do you have numbness in fingers?", options: [{ label: "Yes", tags: ['numbness'] }, { label: "No", tags: [] }] },
        { text: "Does gripping hurt?", options: [{ label: "Yes", tags: ['gripping'] }, { label: "No", tags: [] }] }
    ],
    other: [
        { text: "Is the pain constant?", options: [{ label: "Yes", tags: [] }, { label: "No", tags: [] }] },
        { text: "Have you seen a doctor?", options: [{ label: "Yes", tags: [] }, { label: "No", tags: [] }] },
        { text: "Is it getting worse?", options: [{ label: "Yes", tags: [] }, { label: "No", tags: [] }] },
        { text: "Does medication help?", options: [{ label: "Yes", tags: [] }, { label: "No", tags: [] }] }
    ]
};

// State
let currentQuestionIndex = 0;
let userTags = new Set();
let specificBranch = null;
let questionQueue = [];

// DOM Elements
const views = {
    landing: document.getElementById('landing-view'),
    question: document.getElementById('question-view'),
    result: document.getElementById('result-view')
};

const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');

// Event Listeners
startBtn.addEventListener('click', startAssessment);
restartBtn.addEventListener('click', resetAssessment);
backBtn.addEventListener('click', goBack); // Note: Back logic needs update for linear flow

// Functions
function switchView(viewName) {
    Object.values(views).forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    views[viewName].classList.remove('hidden');
    setTimeout(() => {
        views[viewName].classList.add('active');
    }, 10);
}

function startAssessment() {
    currentQuestionIndex = 0;
    userTags.clear();
    specificBranch = null;

    // Build Queue: 15 General -> 1 Body Part -> Placeholder for Specific
    questionQueue = [...generalQuestions, bodyPartQuestion];

    renderQuestion();
    switchView('question');
    updateProgress();
}

function renderQuestion() {
    if (currentQuestionIndex >= questionQueue.length) {
        showResults();
        return;
    }

    const question = questionQueue[currentQuestionIndex];

    // Animation out
    questionText.style.opacity = 0;
    optionsContainer.style.opacity = 0;

    setTimeout(() => {
        questionText.textContent = `Q${currentQuestionIndex + 1}: ${question.text}`;
        optionsContainer.innerHTML = '';

        question.options.forEach(option => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = `<h3>${option.label}</h3>`;
            card.onclick = () => handleAnswer(option);
            optionsContainer.appendChild(card);
        });

        // Animation in
        questionText.style.opacity = 1;
        optionsContainer.style.opacity = 1;

        // Hide back button for simplicity in this strict flow, or implement history stack
        backBtn.classList.add('hidden');

        updateProgress();

    }, 300);
}

function handleAnswer(option) {
    // Add tags
    if (option.tags) {
        option.tags.forEach(tag => userTags.add(tag));
    }

    // Check if this was the body part selection (Index 15, i.e., 16th question)
    if (currentQuestionIndex === 15 && option.next) {
        specificBranch = option.next;
        const specificQs = specificQuestions[specificBranch];
        if (specificQs) {
            questionQueue.push(...specificQs);
        }
    }

    currentQuestionIndex++;
    renderQuestion();
}

function goBack() {
    // Simplified: Restart for now to ensure data integrity in linear flow
    if (confirm("Restart assessment?")) {
        resetAssessment();
    }
}

function showResults() {
    updateProgress(100);

    let bestMatch = null;
    let maxMatches = -1;

    injuries.forEach(injury => {
        let matchCount = 0;
        injury.tags.forEach(tag => {
            if (userTags.has(tag)) matchCount++;
        });

        if (matchCount > maxMatches) {
            maxMatches = matchCount;
            bestMatch = injury;
        }
    });

    if (bestMatch && maxMatches > 0) {
        document.getElementById('injury-name').textContent = bestMatch.name;
        document.getElementById('injury-description').textContent = bestMatch.description;

        const recList = document.getElementById('recommendation-list');
        recList.innerHTML = '';
        bestMatch.recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec;
            recList.appendChild(li);
        });
    } else {
        document.getElementById('injury-name').textContent = "Consult a Specialist";
        document.getElementById('injury-description').textContent = "We gathered a lot of information, but your symptoms don't perfectly match a single common injury in our database. Please see a doctor for a full diagnosis.";
        document.getElementById('recommendation-list').innerHTML = '<li>Rest</li><li>See a Doctor</li>';
    }

    setTimeout(() => {
        switchView('result');
    }, 500);
}

function resetAssessment() {
    switchView('landing');
}

function updateProgress() {
    // Total is dynamic: 16 initially, then +4 = 20.
    const total = 20;
    const percent = (currentQuestionIndex / total) * 100;
    progressFill.style.width = `${Math.min(percent, 100)}%`;
}
