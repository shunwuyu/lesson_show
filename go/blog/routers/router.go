package routers
import (
	"net/http"
	// ctrs "../controllers"
	"github.com/gin-gonic/gin"
	"../models"
)

func LoadRouters(router *gin.Engine) {
	loadRouters(router)
}

func loadRouters(router *gin.Engine) {
	router.GET("/", func(c *gin.Context) {
		
		post := models.GetPostByID(1)
		post := gin.H{
			"text": "a",
		}
		// log.Println("@@ post", post)
		c.JSON(http.StatusOK, gin.H{
			"Status": 0,
			"data": post,
		})
	})
}