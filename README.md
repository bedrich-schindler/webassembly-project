# WebAssembly project

> Project that demonstrates simple stack of the web application which uses WebAssembly to interconnect C++ code with JavaScript application.

## Requirements

Install following tools to be able tu run the project:

* [Node](https://nodejs.org/en/download/)
* [Emscripten](https://emscripten.org/docs/getting_started/downloads.html)
* [surge](https://surge.sh/help/getting-started-with-surge) _(Deploy)_

## Run

To build and run the project use `bash ./run.sh` command.

## Deploy

To deploy web application to http://webassembly-project.bedrich-schindler.surge.sh/, run `bash ./deploy.sh` command.

## Information about C++ and WebAssembly files

* [cpp/src/wasm_example.hpp](cpp/src/wasm_example.hpp): Contains basic example implementation of C functions
* [cpp/src/wasm_word_counter.hpp](cpp/src/wasm_word_counter.hpp): Contains mapping of external C++ library Word Counter using Emscripten Bind
* [cpp/src/wasm_cimg.hpp](cpp/src/wasm_cimg.hpp): Contains facede-style mapping of external C++ library CImg using Emscripten Bind


* [cpp/external/cimg](cpp/external/cimg): External C++ library CImg
* [cpp/external/word-counter](cpp/external/word-counter): External C++ library Word Counter