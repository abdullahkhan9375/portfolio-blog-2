package getprojects

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Project struct {
	Id          string   `json:"id"`
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Features    []string `json:"features"`
	TechStack   []string `json:"techStack"`
	Links       []string `json:"links"`
}

var lProjects = []Project{
	{
		Id:          "Project-1",
		Name:        "Notemaking App",
		Description: "Self-explanatory title",
		Features: []string{
			"React front-end",
			"Randomized backgrounds from Unsplash",
			"Mobile responsive",
		},
		TechStack: []string{
			"React",
			"Netlify",
			"Custom CSS",
		},
		Links: []string{"github link"},
	},
	{
		Id:          "Project-2",
		Name:        "Breaking Bad Quiz",
		Description: "Can you make pure meth?",
		Features: []string{
			"React front-end",
			"Fetch API to grab images from an open-source API",
			"Mobile responsive",
		},
		TechStack: []string{
			"React",
			"Netlify",
			"Custom CSS",
		},
		Links: []string{"github link"},
	},
	{
		Id:          "Project-3",
		Name:        "Google Apps vs Apple Apps",
		Description: "An appstore comparison",
		Features: []string{
			"Exploratory Data analysis that tells a story",
			"Cutting edge python visualization libraries.",
			"Hosted on and powered by Kaggle.",
		},
		TechStack: []string{
			"Plotly",
			"Python",
		},
		Links: []string{"github link"},
	},
}

func GetProjects(aContext *gin.Context) {
	aContext.IndentedJSON(http.StatusOK, lProjects)
}
