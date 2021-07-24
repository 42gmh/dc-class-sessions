-- ------------------- SMALL -------------------
-- The names of all the restaurants in the table.
select r.name 
  from restaurants r;

-- The names of all restaurants that offer take out.
select r.name
  from restaurants r
 where r.does_takeout = true;
 
--The names of all restaurants that are within 50 miles or less.
select r.name
  from restaurants r
 where r.distance <= 50;

--The id of a restaurant by a specific restaurant name.
select r.id
  from restaurants r
 where r.name = 'Phat Burrito';

-- The favorite dishes of all 5-star restaurants.
select r.favorite_dish
  from restaurants r
 where r.stars = 5;

 -- ------------------- MEDIUM -------------------
 -- What User made the most Comments? How many?
select u.name as user_name,
       count(1) as comment_count 
  from comments c
 inner join users u on u.id = c.user_id
 group by u.name
 having count(1) = (select max(cnt) 
                           from (
                             		select c.user_id, 
                                           count(1) as cnt
                                      from comments c 
                                  group by c.user_id
                           		 ) s
                         );
 
--Which Post had the most Comments? Which one had the least?
select p.url as post_url,
	   p.id as post_id,
       count(1) as comment_count 
  from comments c
 inner join posts p on p.id = c.post_id
 group by p.url, p.id
 having count(1) = (select max(cnt) 
                           from (
                             		select c.post_id, 
                                           count(1) as cnt
                                      from comments c 
                                  group by c.post_id
                           		 ) s
                         );

--Write a single query to get all of the Posts and their Comments. 
-- (You will see the same Post repeated in the results.)
select * 
  from posts p
 inner join comments c on c.post_id = p.id
order by p.url asc;
