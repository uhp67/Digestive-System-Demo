// Digestive system information
const info = {
    mouth: {
        title: "Mouth",
        content: "The mouth is where digestion begins. Food is chewed and mixed with saliva, which contains enzymes to break down carbohydrates."
    },
    esophagus: {
        title: "Esophagus",
        content: "The esophagus is a muscular tube that connects the mouth to the stomach. It uses peristalsis to push food down."
    },
    stomach: {
        title: "Stomach",
        content: "The stomach churns food and mixes it with digestive juices, including hydrochloric acid, to break down proteins."
    },
    smallIntestine: {
        title: "Small Intestine",
        content: "The small intestine absorbs nutrients from digested food into the bloodstream. It also continues the breakdown of food."
    },
    largeIntestine: {
        title: "Large Intestine",
        content: "The large intestine absorbs water and salts from food that has not been digested. It forms waste for excretion."
    },
    liver: {
        title: "Liver",
        content: "The liver produces bile, which helps in digesting fats. It also detoxifies chemicals and metabolizes drugs."
    },
	anus: {
		title: "Anus",
		content: ""
	},
	gallbladder: {
		title: "Gallbladder",
		content: ""
	},
	pancreas: {
		title: "Pancreas",
		content: ""
	}
};

// Function to display information
function showInfo(part) {
    const titleElement = document.getElementById("info-title");
    const contentElement = document.getElementById("info-content");

    titleElement.textContent = info[part].title;
    contentElement.textContent = info[part].content;
}
