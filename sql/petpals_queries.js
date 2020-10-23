const sql = {}

sql.query = {

    // ABDUL
    

    // AAKANKSHA
    //LOGIN: returns 1 if username-password combination exists. Get all details
    check_login_details: 'SELECT COUNT(*) FROM users WHERE username=$1 AND password=$2',
    get_user_details: 'SELECT * FROM users WHERE username=$1',

    //INSERT STUFF
    //Insert a user into the user table
    add_user: 'INSERT INTO users (username, password, first_name, location, card_number) VALUES($1,$2, $3, $4, $5)',
    //Insert a pet owner
    add_pet_owner: 'INSERT INTO owners (username) VALUES($1)',
    //Insert a care taker
    add_care_taker: 'INSERT INTO caretakers (username, average_rating) VALUES($1, $2)',
    //Insert a part time caretaker
    add_part_timer: 'INSERT INTO part_timers (username) VALUES($1)',
    //Insert a full time care taker
    add_full_timer: 'INSERT INTO full_timers (username) VALUES($1)',
    //Insert a PCS admin
    add_admin: 'INSERT INTO administrator (username) VALUES($1)',
    //Add a pet type
    add_pet_type_admin: 'INSERT INTO pet_types (animal_name, base_price) VALUES($1, $2)',
    //Add a pet
    add_pet: 'INSERT INTO pets (pet_name, type, owner) VALUES($1, $2, $3)',
    //Add service type by admin
    add_service_admin: 'INSERT INTO services (service_name) VALUES($1)',
    //Add pet type for care taker
    add_pet_type_caretaker: 'INSERT INTO handles (caretaker, animal_name, price) VALUES ($1, $2, $3)',
    //Add service for a care taker
    add_service_caretaker: 'INSERT INTO provides (caretaker, animal_name, service_name) VALUES ($1, $2, $3)',
    //Add service required for a pet
    add_service_pet: 'INSERT INTO requires (owner, pet_name, service_name) VALUES ($1, $2, $3)',
    //Add leave for full time care taker
    add_leave: 'INSERT INTO leave_dates(username, start_period, end_period) VALUES ($1, $2, $3)',
    //Add availability for part time care taker
    add_availability: 'INSERT INTO available_dates(username, start_period, end_period) VALUES ($1, $2, $3)',
    //Add a booking
    add_booking: 'INSERT INTO bookings(owner, pet_name, caretaker, start_period, end_period, payment_method, delivery_method, status, bid_rate, rating, remarks) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NULL, NULL )',
    
    //UPDATES
    //Add rating
    add_review: 'UPDATE bookings SET rating = $6 WHERE owner = $1 AND pet_name = $2 AND caretaker = $3 AND start_period = $4 AND end_period = $5',
    //Add rating and remarks
    add_review_and_remark: 'UPDATE bookings SET rating = $6, remarks = $7  WHERE owner = $1 AND pet_name = $2 AND caretaker = $3 AND start_period = $4 AND end_period = $5',
    //Add just remarks
    add_remark: 'UPDATE bookings SET remarks = $6 WHERE owner = $1 AND pet_name = $2 AND caretaker = $3 AND start_period = $4 AND end_period = $5',
    //Accept a booking
    accept_booking: 'UPDATE bookings SET status = \'ACCEPTED\' WHERE owner = $1 AND pet_name = $2 AND caretaker = $3 AND start_period = $4 AND end_period = $5',
    //Decline a booking
    decline_booking: 'UPDATE bookings SET status = \'DECLINED\' WHERE owner = $1 AND pet_name = $2 AND caretaker = $3 AND start_period = $4 AND end_period = $5',
    //Update base price for a pet type
    update_base_price: 'UPDATE pet_types SET base_price = $2 WHERE animal_name = $1',
    //Update password
    update_password: 'UPDATE users SET password = $2  WHERE username = $1',
    //Update card number
    update_card: 'UPDATE users SET card_number = $2  WHERE username = $1',
    //Update location
    update_location: 'UPDATE users SET location = $2  WHERE username = $1',
    //Update rate caretaker
    update_caretaker_price: 'UPDATE handles SET price = $2 WHERE caretaker = $1',
    //Update average rating
    update_averate_rating: 'UPDATE caretakers SET average_rating = $2  WHERE username = $1',

    //DELETION
    //Delete user
    delete_user: 'DELETE FROM users WHERE username = $1',
    //Delete pet owner
    delete_owner: 'DELETE FROM owners WHERE username = $1',
    //delete care taker
    delete_caretaker: 'DELETE FROM caretakers WHERE username = $1',
    //delete part timer
    delete_part_timer: 'DELETE FROM part_timers WHERE username = $1',
    //delete full timer
    delete_full_timer: 'DELETE FROM full_timers WHERE username = $1',
    //delete admin
    delete_admin: 'DELETE FROM administrator WHERE username = $1',
    //delete pet type
    delete_pet_type: 'DELETE FROM pet_types WHERE animal_name = $1',
    //delete pet
    delete_pet: 'DELETE FROM pets WHERE owner = $1 AND pet_name = $2',
    //delete a service type by admin
    delete_service_admin: 'DELETE FROM services WHERE service_name = $1',
    //delete pet type care taker takes care of
    delete_pet_type_caretaker: 'DELETE FROM handles WHERE caretaker = $1 AND animal_name = $2',
    //delete a service a caretaker provides for a pet type
    delete_service_caretaker: 'DELETE FROM provides WHERE caretaker = $1 AND animal_name = $2 AND service_name = $3',
    //delete a service a pet requires
    delete_service_pet: 'DELETE FROM requires WHERE owner = $1 AND pet_name = $2 AND service_name = $3',
    //delete leave
    delete_leave: 'DELETE FROM leave_dates WHERE username = $1 AND start_period = $2 AND end_period = $3',
    //delete availability
    delete_availability: 'DELETE FROM available_dates WHERE username = $1 AND start_period = $2 AND end_period = $3',
    //delete booking
    delete_booking: 'DELETE FROM bookings WHERE owner = $1 AND pet_name = $2 AND caretaker = $3 AND start_period = $4 AND end_period = $5',

    //BASIC QUERIES
    //Check if given username is in users table. Returns 1 if true.
    check_if_username_exists: 'SELECT COUNT(*) FROM users WHERE username=$1',
    //Check if given username is a petowner. Returns 1 if true.
    check_if_pet_owner: 'SELECT COUNT(*) FROM users WHERE username=$1',
    //check if given username is admin. Returns 1 if true.
    check_if_admin: 'SELECT COUNT(*) FROM administrator WHERE username=$1',
    //check if given username is caretaker. Returns 1 if true.
    check_if_caretaker: 'SELECT COUNT(*) FROM caretakers WHERE username=$1',
    //check if given username if part time care taker. Returns 1 if true.
    check_if_part_timer: 'SELECT COUNT(*) FROM part_timers WHERE username=$1',
    //check if given username is full time care taker. Returns 1 if true.
    check_if_full_timer: 'SELECT COUNT(*) FROM full_timers WHERE username=$1',
    //get number of bookings with review for a caretaker of given username
    get_num_of_reviews: 'SELECT COUNT(*) FROM bookings WHERE caretaker = $1 AND rating IS NOT NULL',
    //get caretakers with avg review below a particular value
    get_caretakers_with_poor_reviews: 'SELECT username FROM caretakers WHERE average_rating < $1 AND (SELECT COUNT(*) FROM bookings WHERE caretaker = username AND rating IS NOT NULL)',
    //get all services of a caretaker for a pet type
    get_caretaker_services: 'SELECT * FROM provides WHERE animal_name = $1 AND caretaker = $2',
    //get all care takers that can handle a pet type with prices and average review
    get_caretakers_prices: 'SELECT * FROM caretakers NATURAL JOIN handles WHERE animal_name = $1',
    //Get all caretakers in the same area as a given pet owner
    get_caretakers_in_area: 'SELECT U2.username FROM users U1, users U2, caretakers C WHERE U1.username = $1 AND C.username = U2.username AND U2.area = U1.area',
    //get pets of a pet owner
    get_pet_owners_pets: 'SELECT * FROM pets WHERE owner = $1',
    //Get all services of a pet
    get_services_of_a_pet: 'SELECT * FROM requires WHERE owner = $1 AND pet_name = $2',
    //pet owner views all bookings
    get_all_pet_owners_bookings: 'SELECT * FROM bookings WHERE owner = $1',
    //pet owner views all pending bookings
    get_all_pending_pet_owners_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND status = \'PENDING\'',
    //pet owner views all accepted bookings
    get_all_accepted_pet_owners_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND status = \'ACCEPTED\'',
    //pet owner views all declined bookings
    get_all_declined_pet_owners_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND status = \'DECLINED\'',
    //pet owner views all bookings of a particular pet
    get_all_pets_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND pet_name = $2',
    //pet owner views all pending bookings of a particular pet
    get_all_pending_pet_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND pet_name = $2 AND status = \'PENDING\'',
    //pet owner views all accepted bookings of a particular pet
    get_all_accepted_pet_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND pet_name = $2 AND status = \'ACCEPTED\'',
    //pet owner views all declined bookings of a particular pet
    get_all_declined_pet_bookings: 'SELECT * FROM bookings WHERE owner = $1 AND pet_name = $2 AND status = \'DECLINED\'',
    //care taker views all bookings
    get_all_caretaker_bookings: 'SELECT * FROM bookings WHERE caretaker = $1',
    //care taker views all pending bookings
    get_all_pending_caretaker_bookings: 'SELECT * FROM bookings WHERE caretaker = $1 AND status = \'PENDING\'',
    //care taker views all accepted booking
    get_all_accepted_caretaker_bookings: 'SELECT * FROM bookings WHERE caretaker = $1 AND status = \'ACCEPTED\'',
    //care taker views all rejected bookings
    get_all_declined_caretakers_bookings: 'SELECT * FROM bookings WHERE caretaker = $1 AND status = \'DECLINED\'',
    //retrieve top 5 remarks + ratings of a care taker
    get_top_five_ratings: 'SELECT rating, remarks FROM bookings WHERE caretaker = $1 AND rating IS NOT NULL ORDER BY rating DESC LIMIT 5',
    //retrieve bottom 5 remarks + ratings of a care taker
    get_bottom_five_ratings: 'SELECT rating, remarks FROM bookings WHERE caretaker = $1 AND rating IS NOT NULL ORDER BY rating ASC LIMIT 5',
    //retrieve all remarks + ratings of a caretaker in ascending order
    get_ratings_asc: 'SELECT rating, remarks FROM bookings WHERE caretaker = $1 AND rating IS NOT NULL ORDER BY rating ASC',
    //retrieve all remarks + ratings of a caretaker in descending order
    get_ratings_desc: 'SELECT rating, remarks FROM bookings WHERE caretaker = $1 AND rating IS NOT NULL ORDER BY rating DESC',

    // ABHIMAN


    // WEI YANG
    search_caretaker: 'SELECT '
    /*
    This query is for searching for caretakers that are available,
    Note: section about t.day::date is for generating dates in a range to check if no. of pets in each day
    exceeds limit.

    Assumptions: caretaker table has ratings attributes.
    we let part-time caretakers with rating >= 4 to take care of up to 4 pets at a time (otherwise 2)

    variables: $1 start date, $2 end date, $3 owner username, $4 pet name, $5 max price


    SELECT username, first_name
    FROM users U
    WHERE
    $1 >= NOW() AND $2 >= $1
      AND (
      (EXISTS(SELECT 1 FROM full_timers F WHERE F.username = U.username)
         AND NOT EXISTS(SELECT 1 FROM leave_dates L
                        WHERE L.username = U.username
                        AND (
                          L.start_period BETWEEN $1 AND $2
                          OR (L.start_period <= $1
                              AND L.end_period >= $1)
                          )
                        )
        )
        OR
        (EXISTS(SELECT 1 FROM part_timers P WHERE P.username = U.username)
        AND EXISTS(SELECT 1 FROM available_dates A
                   WHERE A.start_period <= $1
                   AND A.end_period >= $2)
        )
      )

      AND NOT EXISTS (SELECT 1 FROM generate_series(timestamp $1, timestamp $2, interval '1 day') AS T(day)
                         WHERE (SELECT COUNT(*) FROM bookings B
                                WHERE B.status = 'accepted'
                                AND B.caretaker == U.username
                                AND T.day BETWEEN B.start_period AND B.end_period) >=
                                (SELECT CASE
                                  WHEN EXISTS(SELECT 1 FROM full_timers F WHERE F.username = U.username) THEN 5
                                  WHEN (SELECT C.rating FROM caretakers C WHERE C.username = B.username) >= 4 THEN 4
                                  ELSE 2
                                )
                         )
      AND EXISTS (SELECT 1 FROM handles H WHERE H.username = U.username
                    AND H.animal_name = (SELECT type FROM pets WHERE pet_name = $4 AND owner = $3)
                    AND H.price <= $5)

      AND NOT EXISTS (SELECT 1 FROM requires R
                        WHERE R.pet_name = $4 AND R.owner = $3
                        AND NOT EXISTS (SELECT 1 FROM provides P
                                        WHERE P.caretaker = U.usenname
                                        AND P.service_name = R.service_name
                                        AND P.animal_name = (SELECT type FROM pets WHERE pet_name = $4 AND owner = $3)
                                        )
                      )
     */
}