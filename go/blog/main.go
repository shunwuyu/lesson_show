package main
import (
	"io"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	"./routers"
)

func main() {
	r := gin.New()

	f, _ := os.Create("gin.log")
	gin.DefaultWriter = io.MultiWriter(f, os.Stdout)

	r.Use(gin.Logger())

	r.Static("/static", "./static")
	
	routers.LoadRouters(r)

	r.Run(":8888")
}