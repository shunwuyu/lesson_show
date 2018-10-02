package models

import (
	"log"
	db "../database"
)

type MPost struct {
	Id         int64    `xorm:"pk autoincr"`
	Title      string   `xorm:"'title'"`
	FileName   string `xorm: "file_name"`
	TextAmount int64  `xorm: "text_amount"`
	CreateTime int64  `xorm:"created 'create_time'"`
}

func GetPostById(Id int64) *MPost {
	var post MPost
	has, err := db.ORM.Table("posts").Id(Id).Get(&post)
	if err != nil  {
		log.Println("ERROR:", err)
		return nil
	}

	if  has == false {
		return nil
	}

	return &post
}

func GetPosts() *[]MPost {
	var post []MPost
	err := db.ORM.Table("posts").Find(&post)
	if err != nil {
		log.Println("ERROR:", err)
		return nil
	}
	return &post
}
