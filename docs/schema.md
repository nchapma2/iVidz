# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
uploader_id | integer   | not null, foreign key (references users), indexed
video       | string    | not null (added via paperclip)
thumbnail   | string    | not null (added via paperclip)
views       | integer   | not null
category    | string    |


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
video_id    | integer   | not null, foreign key (references videos)
parent_comment_id   | integer   | foreign key(references comment), indexed


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | string    | not null
liked_id    | integer   | not null, polymorphic, foreign key (references comments or videos)

## subscriptions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subscriber_id   | integer   | not null, foreign key (references users), indexed, unique [subscribed_id]
subscribed_id   | integer   | not null, foreign key (references users), indexed
