package getresume

import (
	"encoding/json"
	"net/http"
)

type Project struct {
	Name    string `json:"name"`
	Company string `json:"company"`
}

type WorkExperience struct {
	Company     string `json:"company"`
	Position    string `json:"position"`
	Description string `json:"description"`
	FromDate    string `json:"fromDate"`
	ToDate      string `json:"toDate"`
}

type Resume struct {
	Name           string          `json:"name"`
	Phone          string          `json:"phone"`
	Address        string          `json:"address"`
	Email          string          `json:"email"`
	Website        string          `json:"website"`
	Education      []string        `json:"education"`
	WorkExperience *WorkExperience `json:"workExperience"`
	Expertise      []string        `json:"expertise"`
	Projects       *Project        `json:"projects"`
}

var myResume = Resume{
	Name:      "Abdullah Khan",
	Phone:     "+61 XXX XXXX XX",
	Address:   "240 Ryde Road, West Pymble",
	Email:     "abdullahkhan16021999@gmail.com",
	Education: []string{"Bachelor's of IT", "GCE A Levels"},
	WorkExperience: &WorkExperience{
		Company:     "Proxima Capital",
		Position:    "Junior Software Engineer",
		Description: "Desing fun software",
		FromDate:    "2022-01-04",
		ToDate:      "-",
	},
	Expertise: []string{"I'm pretty good ngl"},
	Projects: &Project{
		Name:    "MaskForce",
		Company: "EY",
	},
}

func GetResume(aWriter http.ResponseWriter, aReader *http.Request) {
	aWriter.Header().Set("Content-Type", "application/json")
	json.NewEncoder(aWriter).Encode(myResume)
}
