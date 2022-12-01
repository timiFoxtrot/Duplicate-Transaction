# WEEK-2-TASK-NODE

# Engineering Problems

This repo contains the duplicate transactions problem you should be able to solve in a reasonable amount of time. It tests your understanding of JavaScript fundamentals.

## Running tests

First, you need to install the dependencies for the project by running

```sh
yarn
```

Then, you can run the tests by running

```sh
yarn test
```

While in active development, you can run the tests by running

```sh
yarn test --watch
```

## Stretch Goals

You can also choose to solve this challenge in [typescript](https://www.typescriptlang.org) by changing the file extension of the `.js` file in the `src` folder to `.ts`. i.e rename `src/duplicate-transactions.js` to `src/duplicate-transactions.ts`

Your file would be typechecked when you run the test. This project is already configured to run the tests either in js or ts.

# Duplicate Transactions

In this exercise, we will be looking for duplicate transactions. This is a common problem in financial systems.

Sometimes when a customer is charged, there is a duplicate transaction created. We need to find those transactions so that they can be dealt with. Everything about the transaction should be identical, except the transaction `id` and the `time` at which it occurred, as there can be up to a minute delay.

Find all transactions that have the same `sourceAccount`, `targetAccount`, `category`, `amount`, and the `time` difference between each consecutive transaction is less than 1 minute and put them in groups.

### Input

An array of transaction objects, with an `id`, `sourceAccount`, `targetAccount`, `amount`, `category`, and `time`. You can assume that all parameters will always be present and valid. However, the incoming transactions are not guaranteed to be in any particular order.

### Output

A list of all the duplicate transaction groups, ordered by time ascending. The groups should be sorted in ascending order of the first transaction in the group.

## Constraints

You cannot use any third party modules. i.e You should not modify the package.json file.
