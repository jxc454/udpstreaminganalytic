package com.github.jxc454.udphistogram

object Processor {
  def process(intValue: Int, histo: Map[Int, Int]): Map[Int, Int] = {
    val newVal: Int = histo.getOrElse(intValue, 0) + 1
    histo + (intValue -> newVal)
  }
}
