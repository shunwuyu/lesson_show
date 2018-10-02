package main
import "fmt"

// 声明函数类型
type functinTyoe func(int, int)

func (f functinTyoe)Serve() {
	fmt.Println("server2")
}

func serve(int, int) {
	fmt.Println("serve1")
}

func main() {
	a := functinTyoe(serve)
	a(1, 2)
	a.Serve()
}