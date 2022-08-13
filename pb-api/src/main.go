package main

import (
	"net/http"
	getblogpreviews "pb-api/src/get/blog"
	getprojects "pb-api/src/get/projects"
	getworkexperience "pb-api/src/get/work"

	"github.com/gin-gonic/gin"
)

// GET resume details

// GET blog details page-wise.

// GET Project details.

func main() {
	lRouter := gin.Default()

	//GET all requests.
	lRouter.GET("/", func(aContext *gin.Context) { aContext.JSON(http.StatusOK, "Hi") })
	lRouter.GET("/work", getworkexperience.GetWorkExperience)
	lRouter.GET("/projects", getprojects.GetProjects)
	lRouter.GET("/blogpreviews", getblogpreviews.GetBlogPreviews)

	// Run server.
	lRouter.Run("localhost:8080")
}
