package main
import (
	"bytes"
	"fmt"
)

func main() {
	b := []byte("Golang")
	subslice1 := []byte("go")
	subslice2 := []byte("Go")
	fmt.Println(bytes.Contains(b, subslice1))
	fmt.Println(bytes.Contains(b, subslice2))
	s2 := []byte("同学们，上午好")
	m := func(r rune) rune {
		if r == '上' {
			r = '下'
		}
		return r
	}
	fmt.Println(string(s2))
	fmt.Println(string(bytes.Map(m, s2)))

	s3 := []byte("google")
	old := []byte("o")
	new := []byte("oo")
	n := 1

	fmt.Println(string(bytes.Replace(s3, old, new, n)))
	fmt.Println(string(bytes.Replace(s3, old, new, -1)))

	s4 := []byte("中华人民共和国")
	r1 := bytes.Runes(s4)
	fmt.Println(string(s4), len(s4))
	fmt.Println(string(r1), len(r1))

	s5 := [][]byte{
		[]byte("你好"),
		[]byte("世界"),
	}
	sep := []byte(",")
	fmt.Println(string(bytes.Join(s5, sep)));
}