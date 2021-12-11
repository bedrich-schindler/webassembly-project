#include <emscripten.h>
#include <emscripten/bind.h>
#include <iostream>

using namespace emscripten;

extern "C" {
    EMSCRIPTEN_KEEPALIVE int arrayIntSum(int * inputArray, int inputArrayLength);
    EMSCRIPTEN_KEEPALIVE float arrayFloatSum(float * inputArray, int inputArrayLength);
}

int arrayIntSum(int * inputArray, int inputArrayLength) {
    int sum = 0;
    for (int i = 0; i < inputArrayLength; i++) {
        sum += inputArray[i];
    }
    return sum;
}

float arrayFloatSum(float * inputArray, int inputArrayLength) {
    float sum = 0;
    for (int i = 0; i < inputArrayLength; i++) {
        sum += inputArray[i];
    }
    return sum;
}
