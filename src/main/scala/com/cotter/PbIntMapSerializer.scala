package com.cotter

import java.util

import com.cotter.io.models.SimpleMessages.SimpleIntMap
import org.apache.kafka.common.serialization.Serializer

class PbIntMapSerializer extends Serializer[SimpleIntMap] {
  override def serialize(topic: String, pb: SimpleIntMap): Array[Byte] = pb.toByteArray

  override def configure(configs: util.Map[String, _], isKey: Boolean): Unit = ()

  override def close(): Unit = ()
}