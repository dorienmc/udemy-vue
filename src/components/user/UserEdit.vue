<template>
    <div>
    <h3>Edit the User</h3>
    <p> ID: {{ $route.params.id }} </p>
    <p> Locale: {{ $route.query.locale}} </p>
    <p> Query #: {{ $route.query.q}} </p>
    </div>
</template>