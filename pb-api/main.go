package main

import (
	getblogpreviews "pb-api/src/blog"
	getprojects "pb-api/src/projects"
	getworkexperience "pb-api/src/work"

	"github.com/gin-gonic/gin"
)

func main() {

	// if port == "" {
	// 	log.Fatal("$PORT must be set")
	// }

	lRouter := gin.New()
	lRouter.Use(gin.Logger())

	lRouter.GET("/work", getworkexperience.GetWorkExperience)
	lRouter.GET("/projects", getprojects.GetProjects)

	// GET Paginated blog previews.
	lRouter.GET("/blogpreviews/:page", getblogpreviews.GetBlogPreviews)

	lRouter.Run(":8080")
}
