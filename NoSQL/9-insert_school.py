#!/usr/bin/env python3
"""Module that inserts a new document in a collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a document based on kwargs and return the new _id."""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
