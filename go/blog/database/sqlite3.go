package database

import (
	"log"
	"github.com/xormplus/xorm"
)

var ORM *xorm.Engine

func init() {
	var err error
	ORM, err = xorm.NewEngine("sqlite3", "./database/test.db")
	if err != nil {
		log.Fatalln(err)
		return
	}
	err = ORM.Ping()
	if  err != nil {
		log.Fatalln(err)
		return
	}
	ORM.ShowSQL(true)
}
