package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"../models"
)

func GetPosts(c * gin.Context) {
	labels := models.GetPosts()
	c.JSON(http.StatusOK, gin.H{
		"status": 0,
		"data": labels,
	})
}