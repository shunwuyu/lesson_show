package main
import "unsafe"

const (
	a = "abc"
	b = len(a)
	c = unsafe.Sizeof(a)
)

func main() {
	const (
		PI = 3.14
		const1 = "1"
	)
	const LENGTH int = 10
	const e, f, g = 1, false, "str"
	println(a, b, c, PI, LENGTH)
}