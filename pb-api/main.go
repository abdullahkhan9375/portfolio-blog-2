package main

import (
	"log"
	"net/http"
	"os"

	getblogpreviews "pb-api/src/blog"
	getprojects "pb-api/src/projects"
	getworkexperience "pb-api/src/work"

	"github.com/gin-gonic/gin"
	_ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("$PORT must be set")
	}

	lRouter := gin.New()
	lRouter.Use(gin.Logger())

	lRouter.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl.html", nil)
	})

	//GET all requests.
	// lRouter.GET("/", func(aContext *gin.Context) { aContext.JSON(http.StatusOK, "Hi") })
	lRouter.GET("/work", getworkexperience.GetWorkExperience)
	lRouter.GET("/projects", getprojects.GetProjects)

	// GET Paginated blog previews.
	lRouter.GET("/blogpreviews/:page", getblogpreviews.GetBlogPreviews)

	lRouter.Run(":" + port)
}
