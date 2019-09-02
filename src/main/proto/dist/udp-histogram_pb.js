// source: udp-histogram.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.histogram.Constraint', null, global);
goog.exportSymbol('proto.histogram.HistogramRequest', null, global);
goog.exportSymbol('proto.histogram.HistogramResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.histogram.HistogramRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.histogram.HistogramRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.histogram.HistogramRequest.displayName = 'proto.histogram.HistogramRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.histogram.HistogramResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.histogram.HistogramResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.histogram.HistogramResponse.displayName = 'proto.histogram.HistogramResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.histogram.Constraint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.histogram.Constraint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.histogram.Constraint.displayName = 'proto.histogram.Constraint';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.histogram.HistogramRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.histogram.HistogramRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.histogram.HistogramRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.histogram.HistogramRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    constraint: (f = msg.getConstraint()) && proto.histogram.Constraint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.histogram.HistogramRequest}
 */
proto.histogram.HistogramRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.histogram.HistogramRequest;
  return proto.histogram.HistogramRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.histogram.HistogramRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.histogram.HistogramRequest}
 */
proto.histogram.HistogramRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.histogram.Constraint;
      reader.readMessage(value,proto.histogram.Constraint.deserializeBinaryFromReader);
      msg.setConstraint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.histogram.HistogramRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.histogram.HistogramRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.histogram.HistogramRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.histogram.HistogramRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConstraint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.histogram.Constraint.serializeBinaryToWriter
    );
  }
};


/**
 * optional Constraint constraint = 1;
 * @return {?proto.histogram.Constraint}
 */
proto.histogram.HistogramRequest.prototype.getConstraint = function() {
  return /** @type{?proto.histogram.Constraint} */ (
    jspb.Message.getWrapperField(this, proto.histogram.Constraint, 1));
};


/** @param {?proto.histogram.Constraint|undefined} value */
proto.histogram.HistogramRequest.prototype.setConstraint = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.histogram.HistogramRequest.prototype.clearConstraint = function() {
  this.setConstraint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.histogram.HistogramRequest.prototype.hasConstraint = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.histogram.HistogramResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.histogram.HistogramResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.histogram.HistogramResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.histogram.HistogramResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    histogramMap: (f = msg.getHistogramMap()) ? f.toObject(includeInstance, undefined) : [],
    constraint: (f = msg.getConstraint()) && proto.histogram.Constraint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.histogram.HistogramResponse}
 */
proto.histogram.HistogramResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.histogram.HistogramResponse;
  return proto.histogram.HistogramResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.histogram.HistogramResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.histogram.HistogramResponse}
 */
proto.histogram.HistogramResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHistogramMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readInt64, null, 0);
         });
      break;
    case 2:
      var value = new proto.histogram.Constraint;
      reader.readMessage(value,proto.histogram.Constraint.deserializeBinaryFromReader);
      msg.setConstraint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.histogram.HistogramResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.histogram.HistogramResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.histogram.HistogramResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.histogram.HistogramResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistogramMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getConstraint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.histogram.Constraint.serializeBinaryToWriter
    );
  }
};


/**
 * map<int64, int64> histogram = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.histogram.HistogramResponse.prototype.getHistogramMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.histogram.HistogramResponse.prototype.clearHistogramMap = function() {
  this.getHistogramMap().clear();
};


/**
 * optional Constraint constraint = 2;
 * @return {?proto.histogram.Constraint}
 */
proto.histogram.HistogramResponse.prototype.getConstraint = function() {
  return /** @type{?proto.histogram.Constraint} */ (
    jspb.Message.getWrapperField(this, proto.histogram.Constraint, 2));
};


/** @param {?proto.histogram.Constraint|undefined} value */
proto.histogram.HistogramResponse.prototype.setConstraint = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.histogram.HistogramResponse.prototype.clearConstraint = function() {
  this.setConstraint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.histogram.HistogramResponse.prototype.hasConstraint = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.histogram.Constraint.prototype.toObject = function(opt_includeInstance) {
  return proto.histogram.Constraint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.histogram.Constraint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.histogram.Constraint.toObject = function(includeInstance, msg) {
  var f, obj = {
    xMin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    xMax: jspb.Message.getFieldWithDefault(msg, 2, 0),
    yMin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    yMax: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.histogram.Constraint}
 */
proto.histogram.Constraint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.histogram.Constraint;
  return proto.histogram.Constraint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.histogram.Constraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.histogram.Constraint}
 */
proto.histogram.Constraint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.histogram.Constraint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.histogram.Constraint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.histogram.Constraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.histogram.Constraint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXMin();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getXMax();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getYMin();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getYMax();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 x_min = 1;
 * @return {number}
 */
proto.histogram.Constraint.prototype.getXMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.histogram.Constraint.prototype.setXMin = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 x_max = 2;
 * @return {number}
 */
proto.histogram.Constraint.prototype.getXMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.histogram.Constraint.prototype.setXMax = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 y_min = 3;
 * @return {number}
 */
proto.histogram.Constraint.prototype.getYMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.histogram.Constraint.prototype.setYMin = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 y_max = 4;
 * @return {number}
 */
proto.histogram.Constraint.prototype.getYMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.histogram.Constraint.prototype.setYMax = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.histogram);
