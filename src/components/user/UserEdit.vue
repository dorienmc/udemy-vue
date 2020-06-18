<template>
    <div>
    <h3>Edit the User</h3>
    <p> ID: {{ $route.params.id }} </p>
    <p> Locale: {{ $route.query.locale}} </p>
    <p> Query #: {{ $route.query.q}} </p>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
    </div>
</template>