// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: March 2023
// This file contains the JS functions for index.html

/**
 * This function calculates the volume of a right triangular pyramid.
 */
function calculatepyramid() {
  // calculations of the volume of the pyramid
  let sideA = parseFloat(document.getElementById("side-a-of-pyramid").value);
  let sideB = parseFloat(document.getElementById("side-b-of-pyramid").value);
   let height = parseFloat(document.getElementById("height-of-pyramid").value);
  // calculating the volume of the pyramid
  let volume = (1/6) * sideA * sideB * height;

  volume = volume.toFixed(2)
  // display of the volume of the pyramid
  document.getElementById("volume").innerHTML = "The volume of the right triangular pyramid is: " + volume + "cm<sup>3</sup>"
}