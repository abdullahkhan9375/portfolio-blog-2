package getblogpreviews

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

var PAGINATION_LIMIT int8 = 4

type BlogPreview struct {
	Id          string   `json:"blogId"`
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Keywords    []string `json:"keywords"`
	Genre       string   `json:"genre"`
	Date        string   `json:"date"`
	TimeToRead  int8     `json:"timeToRead"`
}

var lBlogPreviews = []BlogPreview{
	{
		Id:          "post-1",
		Name:        "Post 1",
		Description: "The first blog post I have ever written wow.",
		Keywords:    []string{"cool", "first blog"},
		Genre:       "Opinion",
		Date:        "2022-01-01",
		TimeToRead:  5,
	},
	{
		Id:          "post-2",
		Name:        "Post 2",
		Description: "The second blog post I have ever written wow.",
		Keywords:    []string{"cool", "second blog"},
		Genre:       "Story",
		Date:        "2022-03-01",
		TimeToRead:  10,
	},
	{
		Id:          "post-3",
		Name:        "Post 3",
		Description: "The third blog post I have ever written wow.",
		Keywords:    []string{"strange", "cool"},
		Genre:       "Article",
		Date:        "2022-05-01",
		TimeToRead:  15,
	},
	{
		Id:          "post-4",
		Name:        "Post 4",
		Description: "The fourth blog post I have ever written wow.",
		Keywords:    []string{"strange", "cool"},
		Genre:       "Article",
		Date:        "2022-05-01",
		TimeToRead:  15,
	},
	{
		Id:          "post-5",
		Name:        "Post 1",
		Description: "The first blog post I have ever written wow.",
		Keywords:    []string{"cool", "first blog"},
		Genre:       "Opinion",
		Date:        "2022-01-01",
		TimeToRead:  5,
	},
	{
		Id:          "post-6",
		Name:        "Post 2",
		Description: "The second blog post I have ever written wow.",
		Keywords:    []string{"cool", "second blog"},
		Genre:       "Story",
		Date:        "2022-03-01",
		TimeToRead:  10,
	},
	{
		Id:          "post-7",
		Name:        "Post 3",
		Description: "The third blog post I have ever written wow.",
		Keywords:    []string{"strange", "cool"},
		Genre:       "Article",
		Date:        "2022-05-01",
		TimeToRead:  15,
	},
	{
		Id:          "post-8",
		Name:        "Post 4",
		Description: "The fourth blog post I have ever written wow.",
		Keywords:    []string{"strange", "cool"},
		Genre:       "Article",
		Date:        "2022-05-01",
		TimeToRead:  15,
	},
}

func paginatedPayload(aPayload []BlogPreview, pageNumber int8) []BlogPreview {
	lPaginatedBlogPreviews := make([]BlogPreview, PAGINATION_LIMIT)
	var endEntry int8 = PAGINATION_LIMIT * pageNumber
	var startEntry int8 = endEntry - PAGINATION_LIMIT // copy original slice.
	var lCopyIndex int = 0
	for lIndex := startEntry; lIndex < endEntry; lIndex++ {
		lPaginatedBlogPreviews[lCopyIndex] = aPayload[lIndex]
		lCopyIndex++
	}
	return lPaginatedBlogPreviews
}

func GetBlogPreviews(aContext *gin.Context) {
	aContext.IndentedJSON(http.StatusOK, paginatedPayload(lBlogPreviews, 2))
}
