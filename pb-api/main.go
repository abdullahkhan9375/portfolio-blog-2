package main

import (
	"net/http"

	getblogpreviews "pb-api/src/blog"
	getprojects "pb-api/src/projects"
	getworkexperience "pb-api/src/work"

	"github.com/gin-gonic/gin"
	_ "github.com/heroku/x/hmetrics/onload"
)

func main() {

	// if port == "" {
	// 	log.Fatal("$PORT must be set")
	// }

	lRouter := gin.New()
	lRouter.Use(gin.Logger())
	lRouter.LoadHTMLGlob("templates/*.tmpl.html")
	lRouter.Static("/static", "static")

	lRouter.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl.html", nil)
	})

	lRouter.GET("/work", getworkexperience.GetWorkExperience)
	lRouter.GET("/projects", getprojects.GetProjects)

	// GET Paginated blog previews.
	lRouter.GET("/blogpreviews/:page", getblogpreviews.GetBlogPreviews)

	lRouter.Run(":8080")
}