package main

import (
	"fmt"
	"log"
	"net/http"

	getresume "pb-api/src/get"
)

func handler(aWriter http.ResponseWriter, aReader *http.Request) {
	fmt.Fprintf(aWriter, "Hi there")
	fmt.Print(aReader)
}

func main() {
	fmt.Println("Hello, world.")
	http.HandleFunc("/", handler)
	http.HandleFunc("/resume", getresume.GetResume)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
